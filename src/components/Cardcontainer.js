import react from 'react'
import Card from './Card';

const Cardcontainer = ({data})=>{
    return(
        <div className="filter-container">

            <div className='cards'>
            {
                data.map((item)=>(
                    <Card key={item.id} {...item}>
                        
                    </Card>

                ))
            }

            </div>

            
        </div>
    )


}

export default Cardcontainer;