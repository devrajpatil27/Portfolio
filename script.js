console.log("Script running");

document.querySelector('.ham').style.display = 'none';
document.querySelector('.cross').style.display = 'block';
document.querySelector('.sidebar').style.display = 'block';


document.querySelector('.cross').addEventListener("click", () => {
    document.querySelector('.ham').style.display = 'block';
    document.querySelector('.cross').style.display = 'none';
    document.querySelector('.sidebar').style.display = 'none';
});

document.querySelector('.ham').addEventListener("click", () => {
    document.querySelector('.ham').style.display = 'none';
    document.querySelector('.cross').style.display = 'block';
    document.querySelector('.sidebar').style.display = 'block';
});

