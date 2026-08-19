(function () {
    const PHONE_OUTER_WIDTH = 413;
    const PHONE_OUTER_HEIGHT = 872;

    function fitPhoneToViewport() {
        const viewport = window.visualViewport;
        const viewportWidth = viewport ? viewport.width : window.innerWidth;
        const viewportHeight = viewport ? viewport.height : window.innerHeight;
        const horizontalGap = viewportWidth <= 520 ? 32 : 52;
        const verticalGap = viewportWidth <= 520 ? 32 : 48;
        const scale = Math.min(
            1,
            (viewportWidth - horizontalGap) / PHONE_OUTER_WIDTH,
            (viewportHeight - verticalGap) / PHONE_OUTER_HEIGHT
        );

        document.documentElement.style.setProperty('--phone-scale', Math.max(scale, 0.1));
    }

    fitPhoneToViewport();
    window.addEventListener('resize', fitPhoneToViewport, { passive: true });
    window.visualViewport?.addEventListener('resize', fitPhoneToViewport, { passive: true });
})();
