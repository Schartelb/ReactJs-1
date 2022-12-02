const Tweet = (props) => {
    <div>
        <Card
            className="my-2"
            style={{
                width: '18rem'
            }}
        >
            <CardHeader>
                {props.name}
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">
                    {props.username}
                </CardTitle>
                <CardText>
                    {props.body}
                </CardText>
            </CardBody>

        </Card>
    </div>
}