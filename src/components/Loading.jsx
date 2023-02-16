import namePNG from '../assets/images/Play__3_-removebg-preview.png';
export default function Loading () {
   
    return (
        <div className="bg-dark w-screen h-screen flex flex-col">
            <img src={namePNG} alt='loader'
            className='max-w-[300px] h-auto m-auto animate-loader'/>
        </div>
    )
}