import re

def inplace_replace(path, replacements):
    with open(path, 'r') as f:
        content = f.read()
    for old, new in replacements:
        content = content.replace(old, new)
    with open(path, 'w') as f:
        f.write(content)

# 1. Contact.jsx (formerly About.jsx)
inplace_replace('src/components/Contact.jsx', [
    ('About.css', 'Contact.css'),
    ('const About =', 'const Contact ='),
    ('export default About', 'export default Contact'),
    ('className="about"', 'className="contact"'),
    ('className="about ', 'className="contact '),
    ('id="about"', 'id="contact"'),
    ('"about__', '"contact__'),
    (' about__', ' contact__')
])

# 2. Contact.css (formerly About.css)
inplace_replace('src/styles/Contact.css', [
    ('.about {', '.contact {'),
    ('.about__', '.contact__')
])

# 3. About.jsx (formerly Features.jsx)
inplace_replace('src/components/About.jsx', [
    ('Features.css', 'About.css'),
    ('const Features =', 'const About ='),
    ('export default Features', 'export default About'),
    ('className="features"', 'className="about"'),
    ('className="features ', 'className="about '),
    ('id="features"', 'id="about"'),
    ('"features__', '"about__'),
    (' features__', ' about__'),
    ("getElementById('about')", "getElementById('contact')"),
    ('href="#about"', 'href="#contact"')
])

# 4. About.css (formerly Features.css)
inplace_replace('src/styles/About.css', [
    ('.features {', '.about {'),
    ('.features__', '.about__')
])

# 5. App.jsx
app_replacements = [
    ("import About from './components/About'", "import Contact from './components/Contact'"),
    ("import Features from './components/Features'", "import About from './components/About'"),
    ("<About />\n      <Features />", "<Contact />\n      <About />")
]
inplace_replace('src/App.jsx', app_replacements)

# 6. Navbar.jsx - change href and onClick targets
inplace_replace('src/components/Navbar.jsx', [
    ('href="#about"', 'href="#contact"'),
    ("handleNavClick(e, 'about')", "handleNavClick(e, 'contact')")
])

# 7. Hero.jsx - change href and onClick targets
inplace_replace('src/components/Hero.jsx', [
    ('href="#about"', 'href="#contact"'),
    ("handleClick(e, 'about')", "handleClick(e, 'contact')")
])

# 8. Footer.jsx - change href
inplace_replace('src/components/Footer.jsx', [
    ('href="#about"', 'href="#contact"')
])

print("Replacements complete.")
