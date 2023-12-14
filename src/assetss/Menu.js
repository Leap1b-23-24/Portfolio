export const MenuIcon = (props) => {
    return <svg onClick={props.onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12H20" stroke={props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4 6H20" stroke={props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4 18H20" stroke={props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

}