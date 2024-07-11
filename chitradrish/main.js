async function uploadImage() {
  const input = document.getElementById('imageUpload');
  const file = input.files[0];
  if (!file) {
      alert("Please select a file");
      return;
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
      const response = await axios.post('http://localhost:8000/predict', formData, {
          responseType: 'blob'
      });

      // Create a URL for the blob
      const blob = response.data;
      const url = URL.createObjectURL(blob);

      // Set the URL to the model entity
      const entity = document.getElementById('ar-model');
      entity.setAttribute('gltf-model', url);
  } catch (error) {
      console.error('Error uploading image:', error);
  }
}