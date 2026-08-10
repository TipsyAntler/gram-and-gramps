(() => {
  const frame = document.querySelector('.topola-frame');
  const openButton = document.querySelector('[data-tree-open]');
  if (!frame) return;

  // Refine Topola's opening view without touching the stable data-loading path.
  // Keep Sam as the focus so Marietta appears with him in the central hourglass,
  // while stripping visual metadata that makes the chart feel like an org chart.
  const refine = () => {
    const current = frame.src;
    const marker = '#/view?';
    const index = current.indexOf(marker);
    if (index === -1) return false;

    const base = current.slice(0, index + marker.length);
    const params = new URLSearchParams(current.slice(index + marker.length));
    params.set('indi', '@I182064743652@');
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
