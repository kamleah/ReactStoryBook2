import React from 'react'
import Slide from './Slide'

export default{
    title:'Carousel/Slide',
    component:Slide,
    argTypes: {
        backgroundColor: { control: 'color' },  
        color: { control: 'color' },        
    },
    
          
    
}

 const SlideTemplates = (args) => <Slide   {...args }/>
 export const ViewSlide = SlideTemplates.bind({});

