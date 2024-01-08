


export default function Section({title, children, ...props}){

    return(
        <div {...props}>

            <main>
                <h2>Time to get started!</h2>
            </main>

            <h1>{title}</h1>
            
            {children}
        </div>
    )

}