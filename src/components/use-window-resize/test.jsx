import usewindowResize from ".";

export default function UsewindowResizeTest() {
    const windowSize = usewindowResize();
    const { width, height } = windowSize;

    return (
        <div>
            <h1>Use window resize hook</h1>
            <p>Width is {width}</p>
            <p>Height is {height}</p>
        </div>    
    );
}