// For planning structure of app state

/* 1st iteration of this idea: */
const project =
{
  tracks:
  [
    {
      // Can only be one DRUMS
      type: 'DRUMS',

      // timeline will be an array with one item for each 16 note division in the entire track length
      // if track is 1 minute long @ 60 bpm:
      // notes.length would equal 60*16=960
      // (having only 16 will probably help performance: if i was to use say, 1024 divisions for each beat, that's a lot more to process)
      clips:
      [
        [
          {
            type: 'KICK',
            duration: 1000, // milliseconds
            velocity: 1, // can be 0, 1, or 2
          },
          {
            type: 'CHAT',
            duration: 1000, // milliseconds
            velocity: 1, // can be 0, 1, or 2
          },
        ],
        null,
        null,
        null,
        [
          {
            type: 'CHAT',
            duration: 1000, // milliseconds
            velocity: 1, // can be 0, 1, or 2
          },
        ],
        null,
        null,
        null,
        [
          {
            type: 'SNARE',
            duration: 1000, // milliseconds
            velocity: 1, // can be 0, 1, or 2
          },
          {
            type: 'CHAT',
            duration: 1000, // milliseconds
            velocity: 1, // can be 0, 1, or 2
          },
        ],
        null,
        null,
        null,
        [
          {
            type: 'CHAT',
            duration: 1000, // milliseconds
            velocity: 1, // can be 0, 1, or 2
          },
        ],
        null,
        null,
        null,
      ]
    },
    {
      // Can only be one SYNTH
      type: 'SYNTH',

      timeline:
      [
        [
          {
            note: 'E',
            duration: 16,
            velocity: 1, // can be 0, 1, or 2 (soft, med, hard)
          },
        ],
        // ...
      ]
    },
    {
      type: 'AUDIO',

      timeline:
      [
        [
          {
            filename: 'guitar1.wav',
            duration: 128,
            // > need to deal with length
            // > guitar1.wav would start on 1st grid item of track
            // > if there was a null before this it would start on 2nd 16th note
          }
        ]
      ]
    }
  ]
}



/*
[2nd iteration of this idea]
=> 4096 vertical 'grid segments' per bar.
=> that gives 256 bidirectional degrees of swing per 1/16th notes
*/

const project2 =
{
  clips:
  {
    /*
      List of all existing audio clips in project
    */
    audio:
    [
      {
        id: 'da23dwscas',
        filename: 'dsadsa',
        duration: 128 // 16th notes
      },
    ],

    midi:
    [
      /*
        List of all existing midi clips in project
        Every time one is copy + pasted or duplicated, a new one is created here.
      */
      {
        id: 'lkj832dsad',
        gridDivisions:
        [
          // Each item in this array is known as a 'grid division'

          // 1/16th mark
          [
            {
              id: 'sdassadasjdh',
              type: 'INITIATOR', // INITIATOR notes and CONTINUATION notes (INITIATOR starts the note, CONTINUATIONs continue it)
              note: 'A#',
              duration: 2, // 2 1/16th beats
            }
          ],

          // 2/16th mark (previous note is still playing. If synth is monophonic, previous note will be halted if new one started here)
          [
            {
              type: 'CONTINUATION',
              initiatorId: 'sdassadasjdh',
            },

            {
              id: 'doiasdasdsa',
              type: 'INITIATOR',
              note: 'F',
              duration: 3,
              /*
                Even if previous A# note duration goes past this note,
                the A# will not be started again,
                because the synth will only play notes
                that are started on a grid division
              */
            }
          ],

          // 3/16th note mark (previous note F still playing, no new notes played)
          [
            {
              type: 'CONTINUATION',
              initiatorId: 'doiasdasdsa'
            }
          ],

          // 4/16th note mark (previous note F still playing, no new notes played)
          [],

          // 5/16th note mark (previous note F is halted because we are past it's duration)
          [],
        ]
      }
    ]
  },

  tracks:
  [
    // drums
    {
      type: 'MIDI',
      deviceChain: [],
      timeline:
      [
        // 1/16th
        [],
        // 2/16th
        [], // even if no notes are here, should be an array by default so we can just 'push' notes (and check length > 0 to do anything)
        // 3/16th
        [],
        // 4/16th
        [],
        // 5/16th
        [],
        // 6/16th
        [],
      ]
    },

    // synth
    {
      type: 'MIDI',
      deviceChain: [],
      timeline: [],
    },

    // audio
    {
      type: 'AUDIO',
      timeline:
      [
        [
          {
            audioClipId: 'das8scdsiufdasj',
            duration: 128,
            // this is the duration of the clip that we play (actual clip duration may be different)
          },
        ],
      ],
    },


    {
      type: 'RETURN',
      // ... v2 idea
    },
  ],
}