(() => {
  const frame = document.querySelector('.topola-frame');
  const openButton = document.querySelector('[data-tree-open]');
  if (!frame) return;

  // Topola removes the surrounding @ signs from GEDCOM pointers internally,
  // so its URL selection must use I182064743652 rather than @I182064743652@.
  // Start on Gramps in the hourglass view with his details panel already open;
  // Gram appears alongside him as spouse.
  const refine = () => {
    const current = frame.src;
    const marker = '#/view?';
    const index = current.indexOf(marker);
    if (index === -1) return false;

    const base = current.slice(0, index + marker.length);
    const params = new URLSearchParams(current.slice(index + marker.length));
    params.set('indi', 'I182064743652');
    params.set('c', 'n');
    params.set('i', 'h');
    params.set('s', 'h');
    params.set('p', 'h');
    params.set('sidePanel', 'true');

    const refinedUrl = base + params.toString();
    if (refinedUrl !== current) frame.src = refinedUrl;
    if (openButton) openButton.href = refinedUrl;
    return true;
  };

  if (!refine()) requestAnimationFrame(refine);
})();
