// export default function TabButton(props){
//     return (<li><button>{props.children}</button></li>)
// }

export default function TabButton({isSelected, buttonName, ...props}){


    return (<li><button className={isSelected ? "active" : "hover"} {...props}> {buttonName} </button></li>);
}