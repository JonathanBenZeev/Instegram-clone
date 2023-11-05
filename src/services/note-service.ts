import { INote } from "../interfaces/note";

const NOTE_DB_KEY = 'noteDB'

const gNotes:INote[]= [
    {
        id: 'n101',
        createdAt: 111112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: '#00d',
        },
        info: {
      txt: 'Full stack baby!',
    },
  },
  {
    id: 'n102',
    type: 'NoteImg',
    createdAt: 111112222,
    isPinned: false,
    info: {
        url: 'http://some-img/me',
        title: 'Bobi and Me',
    },
    style: {
        backgroundColor: '#00d',
    },
},
{
    id: 'n103',
    type: 'NoteTodos',
    createdAt: 111112222,
    isPinned: false,
    style: {
        backgroundColor: '#00d',
    },
    info: {
        title: 'Get my stuff together',
        todos: [
            {
                txt: 'Driving license',
                doneAt: null,
            },
            {
                txt: 'Coding power',
                doneAt: 187111111,
            },
        ],
    },
},
]

_initNotes()


function _initNotes(){
    let notes
    const storeNotes = localStorage.getItem(NOTE_DB_KEY)
    notes = storeNotes? JSON.parse(storeNotes) : []

    if (!notes || !notes.length){
            notes = [...gNotes]
            localStorage.setItem(NOTE_DB_KEY, JSON.stringify(notes))
    }
}