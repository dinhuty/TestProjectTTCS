import React from 'react'
import './trendfilm.css'
import { Link } from 'react-router-dom'

export default function Trendfilm() {
  return (
    <div className='trendfilm'>
        <p className="trendfilm__title title">
            Bảng xếp hạng
        </p>
        <div className="trendfilm__container">
            <div className="trendfilm__container-item">
                <Link to="/detail_film">
                <img src="https://i.ytimg.com/vi/MiHJPa7J7As/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMhod-Fz5Clig9TuzKiUJ1ol2DrA" alt="" />
                </Link>
            </div>
            <div className="trendfilm__container-item">
                <Link to="/detail_film">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
                </Link>
            </div>
            <div className="trendfilm__container-item">
                <Link to="/detail_film">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
                </Link>
            </div>
            <div className="trendfilm__container-item">
                <Link to="/detail_film">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
                </Link>
            </div>
            <div className="trendfilm__container-item">
                <Link to="/detail_film">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
                </Link>
            </div>
           
        </div>
    </div>
  )
}
