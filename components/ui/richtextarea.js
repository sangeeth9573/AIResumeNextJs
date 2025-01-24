
import { useEffect, useState } from 'react';
import { 
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnUnderline,
  BtnUndo,
  Separator,
  Toolbar,
  createButton,
  EditorProvider,
  Editor
} from 'react-simple-wysiwyg';
const BtnAlignCenter = createButton('Align center', '≡', 'justifyCenter');
export default function CustomEditor({worksummary,onTextEditerChange}) {
  const [value, setValue] = useState('<ul>simple text</ul>');
 useEffect(()=>{
  if(worksummary){
    setValue(worksummary);
  }
 },[worksummary]) 
  function onChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
    onTextEditerChange(e)
  }

  return (
    <EditorProvider>
      <Editor value={value} onChange={onChange} >
      <Toolbar>
          <BtnUndo />
          <BtnRedo />
          <Separator />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnClearFormatting />
          <Separator />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}