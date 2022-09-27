// Activate bootstrap tooltip

const tooltips = document.querySelectorAll('.site-tooltip');

tooltips.forEach(tooltip => {
    new bootstrap.Tooltip(tooltip);
});