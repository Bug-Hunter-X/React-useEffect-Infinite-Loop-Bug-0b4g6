# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React: an infinite loop caused by incorrectly using the `useEffect` hook.

## The Bug

The `bug.js` file contains a component that attempts to increment a state variable (`count`) within its `useEffect` hook without any condition or mechanism to stop the increment. This leads to an infinite loop of re-renders and state updates.

## The Solution

The `bugSolution.js` file provides a corrected version of the component.  The solution uses a conditional statement in the useEffect hook to prevent the infinite loop. The corrected component updates state only once on the initial render and then does not change thereafter. This prevents the re-render loop.