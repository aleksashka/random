function log(msg) {
    console.log(`[TAB-RELOADER-SGI-AUTO] ${new Date().toLocaleTimeString()} - ${msg}`);
}

function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

function waitFor(selector, timeout = 15000) {
    return new Promise((resolve, reject) => {
        const start = Date.now();

        const interval = setInterval(() => {
            const el = document.querySelector(selector);
            if (el) {
                clearInterval(interval);
                resolve(el);
            }
            if (Date.now() - start > timeout) {
                clearInterval(interval);
                reject(`Timeout: ${selector}`);
            }
        }, 200);
    });
}

(async () => {
    try {
        log("Script started");

        // STEP 1: SERVICE SELECT (CLICK OPTION 37)
        const serviceSelect = await waitFor('#serviceType');
        serviceSelect.click();
        log("Service dropdown opened");

        await wait(300);

        const serviceOption = document.querySelector('#serviceType option[value="37"]');
        if (!serviceOption) {
            log("Service option not found");
            return;
        }

        serviceOption.selected = true;
        serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
        log("Selected via click: Road Test Class 5");

        await wait(1200);

        // STEP 2: LOCATION SELECT (CLICK OPTION 33)
        const locationSelect = await waitFor('[data-testid="driver-exam-location-select"]');
        locationSelect.click();
        log("Location dropdown opened");

        await wait(300);

        const locationOption = document.querySelector('[data-testid="driver-exam-location-select"] option[value="33"]');
        if (!locationOption) {
            log("Location option not found");
            return;
        }

        locationOption.selected = true;
        locationSelect.dispatchEvent(new Event('change', { bubbles: true }));
        log("Selected via click: Saskatoon Central");

        await wait(1500);

        // STEP 3: NEXT BUTTON
        const nextBtn = await waitFor('[data-testid="next-btn"]');
        nextBtn.click();

        log("Next clicked");

    } catch (e) {
        console.error("[SGI-AUTO] ERROR:", e);
    }
})();
