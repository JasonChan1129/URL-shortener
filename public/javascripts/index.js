const copyBtn = document.querySelector('button.copy');
// for bootstrap tooltip to work
const tooltipTriggerElement = document.querySelector('[data-bs-toggle="tooltip"]');
const tooltip = new bootstrap.Tooltip(tooltipTriggerElement);

if (copyBtn) {
	copyBtn.addEventListener('click', copyURL);
}

function copyURL() {
	// select the url link element
	const copyURL = document.querySelector('a.url');
	// copy the url
	navigator.clipboard.writeText(copyURL.innerText);
	// change tooltip title when click
	tooltipTriggerElement.setAttribute('data-bs-original-title', 'Copied!');
	tooltip.show();
	// reset tooltip title
	tooltipTriggerElement.setAttribute('data-bs-original-title', 'Copy URL to clipboard');
}
