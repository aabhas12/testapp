import React from 'react';
import { Container, Header, Content, Text, Card, CardItem, Body } from 'native-base';

const Page = (props) => {
    return (
        <Container>
            <Header>
                <Text>
                    {props.headertitle}
                </Text>
            </Header>
            <Content>
                <Card>
                    <CardItem header button onPress={() => alert(props.cardheading)}>
                        <Text>{props.cardheading}</Text>
                    </CardItem>
                    <CardItem button onPress={() => alert(props.cardbody)}>
                        <Body>
                        <Text>
                            {props.cardbody}
                        </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer button onPress={() => alert(props.cardfooter)}>
                        <Text>{props.cardfooter}</Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}

export default Page;