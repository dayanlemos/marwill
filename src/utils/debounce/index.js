let timeout = 0;

export function debounce(func, time) {
    clearTimeout(timeout);
    timeout = setTimeout(func, time);
}

export default debounce;
