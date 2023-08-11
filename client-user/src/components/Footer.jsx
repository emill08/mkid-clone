import logo from '../assets/logo2.png'

export default function Footer() {
    return (
        <>
            <div className="primary-color-div w-full h-75 mt-5 bg-neutral">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <img className="h-32 object-cover m-2" src={logo} alt="logo" />
                </div>
            </div>
        </>
    )
}