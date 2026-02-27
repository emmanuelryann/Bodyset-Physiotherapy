import os
import re

# 1. Update index.css
with open('src/index.css', 'a') as f:
    f.write('''

/* ===== Scroll Reveal Animations ===== */
.reveal {
  opacity: 0;
  transform: translateY(3rem);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
''')

# 2. Update Components
components_dir = 'src/components'
for filename in os.listdir(components_dir):
    if filename.endswith('.jsx') and filename not in ['Navbar.jsx']:
        filepath = os.path.join(components_dir, filename)
        with open(filepath, 'r') as f:
            content = f.read()
            
        def repl(m):
            cls = m.group(1)
            if 'reveal' not in cls:
                return f'className="{cls} reveal"'
            return m.group(0)
            
        new_content = re.sub(r'className="([^"]*__container[^"]*)"', repl, content)
        
        if filename == 'Hero.jsx':
            new_content = new_content.replace('className="hero__content"', 'className="hero__content reveal"')
            
        with open(filepath, 'w') as f:
            f.write(new_content)

# 3. Update App.jsx to include IntersectionObserver
app_jsx_path = 'src/App.jsx'
with open(app_jsx_path, 'r') as f:
    app_content = f.read()

import_statement = "import { useEffect } from 'react'\n"
if "import { useEffect }" not in app_content:
    app_content = import_statement + app_content

observer_logic = """
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
"""

app_content = app_content.replace('const App = () => {', f'const App = () => {{{observer_logic}')

with open(app_jsx_path, 'w') as f:
    f.write(app_content)

print("Success")
