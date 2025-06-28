function showSection(sectionId) {
  document.getElementById('products').style.display = sectionId === 'products' ? 'block' : 'none';
  document.getElementById('services').style.display = sectionId === 'services' ? 'block' : 'none';
}
