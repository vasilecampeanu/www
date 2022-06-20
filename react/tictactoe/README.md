# What is react?

# Commands
```bash
npm start
```

```bash
npm run build
```

# What are react hooks?
Prior to version < 16.8 developers where required to write classes.
Hooks are a more ergonomic approach to classes.

By using classes you used to needed a more complex hierarchical structure.

Hooks work oly at the top level of a functional component.

# Hooks
## Basic hooks
### useState(...)
Manages anny data taht changes.
When data changes re-rerenders the UI.

```jsx
const [count, setCount] = useState(0); // 0 is the default state

// count - reactive data
// setCount - setter function

// UI Changes when {count} changes
return(
    <button oncClick={() => setCount(count + 1)}>
        {count}
    </button>
)
```

### useEffect

### useContext

## How do you create a hook? 