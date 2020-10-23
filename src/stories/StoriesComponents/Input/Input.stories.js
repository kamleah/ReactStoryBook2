import React from 'react'
import Input from './Input'

export default{
    title:'Inputs Tags/InputSearch',
    component:Input,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    //     background:{control:'color'},
    //     color:{control:'color'},
        
    //       },
          
    
}

 const InputTemplates = (args) => <Input  {...args }/>
 export const InputSearch = InputTemplates.bind({});

