// skidded from somewhere
//
import { moduleDefinition } from "../../moduleapi"


function fly() {
    //@ts-ignore
    R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; DI=document.getElementsByTagName("img"); DIL=DI.length; function A(){for(i=0; i-DIL; i++){DIS=DI[ i ].style; DIS.position='absolute'; DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px"; DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px"}R++}setInterval('A()',5); void(0)
}

const plugin: moduleDefinition = {
    "display_name": "flying images",
    "section": "fun",
    "id": "flying",
    'onactive': fly,
    "always": true,
    "custom_render": false,
    "description": "flying images, cannot be disabled"
}

export default plugin;