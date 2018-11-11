import React, { Component } from "react";
import { Button, Icon, Item, Label, Container } from "semantic-ui-react";

import CoursesData from "../../helpers/courses.json";
import PlaceHolderImg from "../../Assets/placeholder.png";

export default class Workshops extends Component {
  render() {
    console.log(CoursesData);
    return (
      <div>
        <h1>Courses</h1>
        <Container>
          <Item.Group divided>
            {CoursesData.map(course => (
              <Item key={course.title}>
                <Item.Image src={PlaceHolderImg} />
                <Item.Content>
                  <Item.Header>{course.title}</Item.Header>
                  <Item.Meta>
                    <Label>{course.category}</Label>
                    <p>
                      {course.starting_age} - {course.ending_age} years old
                    </p>
                    <p>
                      {course.starting_time} - {course.ending_time}
                    </p>{" "}
                    <p>
                      {course.starting_date} - {course.ending_date}
                    </p>
                  </Item.Meta>
                  <Item.Description>{course.description}</Item.Description>
                  <Item.Extra>
                    <Button primary floated="right">
                      More information
                      <Icon name="right chevron" />
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Container>
      </div>
    );
  }
}
