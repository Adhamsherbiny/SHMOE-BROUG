"use client"
export function handleToogleMenu() {
    const nav = document.getElementById("nav");
    if (nav!.style.height == "100vh") {
        nav!.style.height = "65px";
        nav!.style.overflow = "hidden";
        nav!.style.position = "fixed";
    } else{
        nav!.style.height = "100vh";
        nav!.style.overflow = "auto";
        nav!.style.position = "fixed";
    }
}

export function hideNav() {
    const nav = document.getElementById("nav");
    nav!.style.height = "65px";
    nav!.style.overflow = "hidden";
}
