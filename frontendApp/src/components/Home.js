import React, { Component } from 'react';
import { Button, Header, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router';

export class Home extends Component {

  state = {
    address: ''
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <Header as='h1'>Aplicação Descentralizada Para Leilão Online</Header>

        <Form>
          <Form.Input
            label='Endereço do Contrato'
            type='text'
            value={this.state.address}
            onChange={this.onChange}
          />
          <Button
            type='submit'
            onClick={this.onSubmit}
          >
            Acessar Leilão
          </Button>
        </Form>
      </div>
    );
  }

  onChange(event) {
    this.setState({address: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/campaigns/${this.state.address}`)
  }
}

export default withRouter(Home);
