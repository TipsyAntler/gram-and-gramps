(() => {
  const frame = document.querySelector('.topola-frame');
  const openButton = document.querySelector('[data-tree-open]');
  if (!frame || !window.JSZip) return;

  const OLD_BASE = 'https://tipsyantler.github.io/gram-and-gramps/';
  const NEW_BASE = 'https://samandmarietta.com/';

  async function rewriteTreeLinks() {
    try {
      const current = frame.src;
      const hashIndex = current.indexOf('#/view?');
      if (hashIndex < 0) return;

      const base = current.slice(0, hashIndex + '#/view?'.length);
      const params = new URLSearchParams(current.slice(hashIndex + '#/view?'.length));
      const dataUrl = params.get('url');
      if (!dataUrl || !dataUrl.startsWith('data:application/zip;base64,')) return;

      const zipBase64 = dataUrl.slice('data:application/zip;base64,'.length);
      const zip = await JSZip.loadAsync(zipBase64, { base64: true });
      let changed = false;

      const files = Object.values(zip.files).filter(file => !file.dir);
      for (const file of files) {
        const text = await file.async('string');
        if (!text.includes(OLD_BASE)) continue;
        const updated = text.split(OLD_BASE).join(NEW_BASE);
        zip.file(file.name, updated);
        changed = true;
      }

      if (!changed) return;

      const updatedBase64 = await zip.generateAsync({
        type: 'base64',
        compression: 'DEFLATE',
        compressionOptions: { level: 6 }
      });

      params.set('url', 'data:application/zip;base64,' + updatedBase64);
      const updatedTopolaUrl = base + params.toString();
      frame.src = updatedTopolaUrl;
      if (openButton) openButton.href = updatedTopolaUrl;
    } catch (error) {
      console.error('Family tree domain rewrite failed', error);
    }
  }

  rewriteTreeLinks();
})();
