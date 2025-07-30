import explorer from '../assets/whiteexpp.png';
import pros from '../assets/whitepro.jpeg'


export function Sidebar({ onImageClick, onSelect }) {

    return (
        <div className="w-10 h-[calc(100vh-3rem)] bg-neutral-700 flex flex-col justify-between items-center overflow-hidden ">
            <div className=" bg-neutral-700 ">
                <button className='mt-2' onClick={onImageClick}>
                    <div className="w-8 h-8 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25"
                            height="25"
                            viewBox="0 0 172 172"
                            style={{ fill: "rgb(0, 0, 0)" }} // ✅ React expects object here
                        >
                            <g
                                fill="none"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                style={{ mixBlendMode: "normal" }}
                            >
                                <path d="M0,172v-172h172v172z" fill="none" />
                                <g fill="#ffffff">
                                    <path d="M65.36,0v20.64l6.88,6.88v-20.64h51.6v41.28h41.28v89.44h-51.6v6.88h58.48v-101.1575l-43.3225,-43.3225zM130.72,11.7175l29.5625,29.5625h-29.5625zM0,27.52v144.48h106.64v-101.1575l-0.9675,-1.075l-41.28,-41.28l-1.075,-0.9675zM6.88,34.4h51.6v41.28h41.28v89.44h-92.88zM65.36,39.345l29.455,29.455h-29.455z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </button>


            </div>

<div className="pb-4">
  <div onClick={() => onSelect('index')} className="cursor-pointer w-8 h-8 text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.5 18.364A9.964 9.964 0 0112 15c2.485 0 4.75.91 6.5 2.364M15 10a3 3 0 11-6 0 3 3 0 016 0zm7 2a10.5 10.5 0 11-21 0 10.5 10.5 0 0121 0z"
      />
    </svg>
  </div>
</div>





        </div>
    )
}