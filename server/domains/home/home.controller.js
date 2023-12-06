// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  const iconSet = ['📚', '🧮', '📕', '📖'];
  const icon = iconSet[Math.floor(Math.random() * iconSet.length)];
  res.render('home/homeView', { title: 'bibliotecgam', icon });
};

// GET "/about"
const about = (req, res) => {
  res.render('home/aboutView', {
    title: 'bibliotecgam | About',
    appVersion: '1.0.0',
  });
};

// Controlador Home
export default {
  home,
  about,
};
