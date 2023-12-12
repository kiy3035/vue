import '@/css/common.css';

/** 커스텀 경고창 */
function gfnAlert(message) {
  var alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-danger';

  // Font Awesome 아이콘 컴포넌트를 생성 (안됨)
  var icon = document.createElement('font-awesome-icon');
  icon.setAttribute('icon', 'fa-solid fa-triangle-exclamation');
  icon.style.fontSize = '24px';
  icon.style.color = 'red';
  icon.style.zIndex = '2000';

  var contentDiv = document.createElement('div');
  contentDiv.textContent = message;

  alertDiv.appendChild(icon);
  alertDiv.appendChild(contentDiv);

  document.body.appendChild(alertDiv);

  alertDiv.style.display = 'block';

  setTimeout(() => {
    alertDiv.classList.remove('show');
    document.body.removeChild(alertDiv);
  }, 3000);
}


export {
  gfnAlert,
};
