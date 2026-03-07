export function getElementById(elementId: string) {
    const element = document.getElementById(elementId);
    return element;
}

export function getInputValue(inputElementId: string) {
    const inputElement = getElementById(inputElementId) as HTMLInputElement;
    return inputElement.value;
}

export function getDivElement(inputElementId: string) {
    const divElement = getElementById(inputElementId) as HTMLDivElement;
    return divElement;
}

export function resetInputValue(inputElementId: string) {
    const inputElement = getElementById(inputElementId) as HTMLInputElement;
    inputElement.value = '';
}