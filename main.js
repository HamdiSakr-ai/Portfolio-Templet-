document.getElementById('cover-image-input').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imgPreview = document.getElementById('cover-image-preview');
      imgPreview.src = e.target.result;
      imgPreview.style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
  });
  
  document.getElementById('add-project-btn').addEventListener('click', function() {
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;
    const imageInput = document.getElementById('project-image');
    const imageFile = imageInput.files[0];
  
    if (title && description && imageFile) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        
        const projectImage = document.createElement('img');
        projectImage.src = e.target.result;
        projectCard.appendChild(projectImage);
  
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = title;
        projectCard.appendChild(projectTitle);
  
        const projectDescription = document.createElement('p');
        projectDescription.textContent = description;
        projectCard.appendChild(projectDescription);
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => projectCard.remove());
        projectCard.appendChild(deleteButton);
  
        document.getElementById('projects-list').appendChild(projectCard);
  
        document.getElementById('project-title').value = '';
        document.getElementById('project-description').value = '';
        imageInput.value = '';
      }
      reader.readAsDataURL(imageFile);
    } else {
      alert('Please fill out all fields');
    }
  });
  