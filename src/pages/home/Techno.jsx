import React from 'react';
import {
  DiCss3,
  DiGithub,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiReact,
} from 'react-icons/di';

export default function Techno() {
  return (
    <div id='tech-section'>
      <h1>Technologies I use</h1>
      <div
        id='showcase'
        className='grid grid-cols-(--my-grid) gap-10 my-9 px-2 place-items-center'
      >
        <DiHtml5 class='icons' />
        <DiCss3 class='icons' />
        <DiJavascript1 class='icons' />
        <DiReact class='icons ' />
        <DiGithub class='icons animate-wiggle' />
        <DiJava class='icons' />
      </div>
    </div>
  );
}
