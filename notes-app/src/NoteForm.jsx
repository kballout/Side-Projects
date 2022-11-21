import React, { useRef } from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreatableReactSelect from 'react-select/creatable'

export default function NoteForm({onSubmit}) {
    const title = useRef(null)
    const markdown = useRef(null)
    const [selectedTags, setSelectedTags] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit({
            title: title.current.value,
            markdown: markdown.current.value,
            tags: []
        })
    }
  return (
    <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={title} required/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId='tags'>
                        <Form.Label>Tags</Form.Label>
                        <CreatableReactSelect isMulti/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId='markdown'>
                        <Form.Label>Body</Form.Label>
                        <Form.Control ref={markdown} required as='textarea' rows={15} />
                    </Form.Group>
                </Col>
            </Row>
            <Stack direction='horizontal' gap={2} className='justify-content-end'>
                <Button type='submit' variant='primary'>Save</Button>
                <Link to='..'>
                    <Button type='button' variant='outline-secondary'>Cancel</Button>
                </Link>
            </Stack>
        </Stack>
    </Form>
  )
}
