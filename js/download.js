document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'sample.pdf'; 
  link.download = 'DownloadedFile.pdf'; 
  link.click();
});
