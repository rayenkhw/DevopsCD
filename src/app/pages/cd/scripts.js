document.addEventListener('DOMContentLoaded', (event) => {
    const draggables = document.querySelectorAll('.draggable');
    const dropzones = document.querySelectorAll('.dropzone');
  
    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.src);
        e.target.classList.add('dragging');
      });
  
      draggable.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
      });
    });
  
    dropzones.forEach(dropzone => {
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.target.classList.add('over');
      });
  
      dropzone.addEventListener('dragleave', (e) => {
        e.target.classList.remove('over');
      });
  
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        e.target.classList.remove('over');
        const src = e.dataTransfer.getData('text/plain');
        if (src) {
          e.target.innerHTML = `<img src="${src}" alt="Dropped Image" class="dropped">`;
        }
      });
    });
  });
  