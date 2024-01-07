// Example demonstrating memo()
function memoizeFunction(func) {
    const cache = new Map();
    return function (...args) {
        const key = args.join('-');
        if (cache.has(key)) {
            console.log('Memoized result used:', cache.get(key));
            return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        console.log('Function executed:', result);
        return result;
    };
}

const memoizedAdd = memoizeFunction((a, b) => a + b);
memoizedAdd(2, 3); // Function executed: 5
memoizedAdd(2, 3); // Memoized result used: 5

// Example demonstrating useMemo()
function expensiveComputation() {
    console.log('Expensive computation executed');
    return Math.random();
}

const memoizedExpensiveComputation = useMemo(() => expensiveComputation(), []);
memoizedExpensiveComputation; // Expensive computation executed

// Example demonstrating callback()
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Data from an API';
        callback(data);
    }, 1000);
}

function processReceivedData(data) {
    console.log('Data received:', data);
}

fetchData(processReceivedData); // Data received: Data from an API
