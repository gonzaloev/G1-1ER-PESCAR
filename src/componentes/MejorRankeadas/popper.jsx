import React from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import { Popover } from 'react-bootstrap'
import { Button } from 'bootstrap'


function popperExample() {
  return (
    <>
  {['right'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      }
    >
      {/* <Button variant="danger">Popover on {placement}</Button> */}
    </OverlayTrigger>
  ))}
</>
  )
}

export default popperExample