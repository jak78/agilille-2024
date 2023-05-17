function adaptBodyWithFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  this.document.body.style.paddingBottom = footer.offsetHeight + 'px';
}

window.addEventListener('load', adaptBodyWithFooter);
window.addEventListener('resize', adaptBodyWithFooter);
