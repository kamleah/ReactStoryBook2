import React from 'react'
import Dots from './Dots'

export default{
    title:'Carousel/Dots',
    component:Dots,
    argTypes: {
        backgroundColor: { control: 'color' },  
        color: { control: 'color' },        
    },
    
          
    
}

 const DotsTemplates = (args) => <Dots   {...args }/>
 export const ViewDots = DotsTemplates.bind({});

