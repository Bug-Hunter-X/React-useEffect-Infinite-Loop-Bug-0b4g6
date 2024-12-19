```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This only runs once on mount.
    console.log('count updated');
  }, []);

  return <div>Count: {count}</div>;
}
```