import mars from '../resources/marsplanet.png';
import venus from '../resources/venus.png';
import earth from '../resources/earth.png';
import mercury from '../resources/mercury.png';
import jupiter from '../resources/jupiter.png';
import saturn from '../resources/saturn.png';
import uranus from '../resources/uranus.png';
import neptune from '../resources/neptune.png';
import pluto from '../resources/pluto.png';
import sun from '../resources/sun.png';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';



    

const Home = () => {

    return (
        <div className="App">
            <header className="App-header">
                <Container fluid>
                    <Row>
                        <Col>
                            <Card style={{backgroundColor: 'rgba(0,0,0,0.0)', border: 'none' }}>
                                <Card.Img variant="top" src={sun} className='App-logo'/>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '3rem' }}>Sun</Card.Title>
                                    <Card.Text style={{ fontSize: '1.2rem' }}>
                                        The so-called "king star" is the center of the solar system in which the Earth is located. It is responsible for providing light, heat and energy to living beings.
                                    </Card.Text>
                                    <Button variant="dark">Go there!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{backgroundColor: 'rgba(0,0,0,0.0)', border: 'none' }}>
                                <Card.Img variant="top" src={mercury} className='App-logo' />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '3rem' }}>Mercury</Card.Title>
                                    <Card.Text style={{ fontSize: '1.2rem' }}>
                                        Mercury is the planet immediately closest to the Sun and is also the smallest of all the 8 large planets.
                                    </Card.Text>
                                    <Button variant="dark">Go There!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: 'rgba(0,0,0,0.0)', border: 'none' }}>
                                <Card.Img variant="top" src={venus} className='App-logo' />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '3rem' }}>Venus</Card.Title>
                                    <Card.Text style={{ fontSize: '1.2rem' }}>
                                        It is the second closest planet to the Sun and the closest to Earth; so much so that it is possible to see it with the naked eye from the earth's surface.
                                    </Card.Text>
                                    <Button variant="dark">Go There!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: 'rgba(0,0,0,0.0)', border: 'none' }}>
                                <Card.Img variant="top" src={earth} className='App-logo' />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '3rem' }}>Earth</Card.Title>
                                    <Card.Text style={{ fontSize: '1.2rem' }}>
                                        The Earth, our home... Planet Earth is a conglomeration of elements arranged in such a way that they function as a whole...
                                    </Card.Text>
                                    <Button variant="dark">Go There!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{backgroundColor: 'rgba(0,0,0,0.0)', border: 'none' }}>
                                <Card.Img variant="top" src={mars} className='App-logo' />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '3rem' }}>Mars</Card.Title>
                                    <Card.Text style={{ fontSize: '1.2rem' }}>
                                        Mars, the fourth, the mysterious red planet with findings of frozen water but no signs of life, is one of the most explored by man.
                                    </Card.Text>
                                    <Button variant="dark">Go There!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: 'rgba(0,0,0,0.0)', border: 'none' }}>
                                <Card.Img variant="top" src={jupiter} className='App-logo' />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '3rem' }}>Jupiter</Card.Title>
                                    <Card.Text style={{ fontSize: '1.2rem' }}>
                                    It is the largest planet in the Solar System and the fifth in distance from the Sun. It is a gigantic flattened ball of gas with no solid surface but probably with a solid inner core.
                                    </Card.Text>
                                    <Button variant="dark">Go There!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: 'rgba(0,0,0,0.0)', border: 'none' }}>
                                <Card.Img variant="top" src={saturn} className='App-logo' />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '3rem' }}>Saturn</Card.Title>
                                    <Card.Text style={{ fontSize: '1.2rem' }}>
                                    One of the most distinctive planets in the Solar System. Famous for its many rings.
                                    </Card.Text>
                                    <Button variant="dark">Go There!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> 
                    <Row>
                        <Col>
                            <Card style={{ backgroundColor: 'rgba(0,0,0,0.0)', border: 'none' }}>
                                <Card.Img variant="top" src={uranus} className='App-logo' />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '3rem' }}>Uranus</Card.Title>
                                    <Card.Text style={{ fontSize: '1.2rem' }}>
                                    It is the third largest planet in the Solar System and the seventh closest planet to the Sun. It is a gaseous planet with a large amount of methane on its surface.
                                    </Card.Text>
                                    <Button variant="dark">Go There!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ backgroundColor: 'rgba(0,0,0,0.0)', border: 'none' }}>
                                <Card.Img variant="top" src={neptune} className='App-logo' />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '3rem' }}>Neptune</Card.Title>
                                    <Card.Text style={{ fontSize: '1.2rem' }}>
                                    It is the furthest planet from the Sun and its existence was predicted before it was discovered.
                                    </Card.Text>
                                    <Button variant="dark">Go There!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: 'rgba(0,0,0,0.0)', border: 'none' }}>
                                <Card.Img variant="top" src={pluto} className='App-logo' />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '3rem' }}>Pluto</Card.Title>
                                    <Card.Text style={{ fontSize: '1.2rem' }}>
                                    Its reconsideration and subsequent dismissal as a "planet" caused a wave of heated debate, but it eventually became one of the dwarf planets.
                                    </Card.Text>
                                    <Button variant="dark">Go There!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Home;