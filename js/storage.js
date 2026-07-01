// ========================================
// STORAGE.JS
// Local Storage Helper Functions
// ========================================

const Storage = {

    /**
     * Save Data
     */

    save(key, value) {

        try {

            localStorage.setItem(
                key,
                JSON.stringify(value)
            );

        }

        catch (error) {

            console.error(
                "Storage Save Error:",
                error
            );

        }

    },

    /**
     * Load Data
     */

    load(key) {

        try {

            const value =
                localStorage.getItem(key);

            return value
                ? JSON.parse(value)
                : null;

        }

        catch (error) {

            console.error(
                "Storage Load Error:",
                error
            );

            return null;

        }

    },

    /**
     * Remove Item
     */

    remove(key) {

        localStorage.removeItem(key);

    },

    /**
     * Clear Everything
     */

    clear() {

        localStorage.clear();

    }

};