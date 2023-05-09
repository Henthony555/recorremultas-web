import React from "react";
import { Grid } from 'semantic-ui-react';

class estatisticas extends React.Component {

    render() {
        return (
            <>
             <Grid textAlign='center' as='h2'  >
                 <div class="ui inverted segment">       
                                <div class="ui red inverted statistic">
                                    <div class="value"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    Petições baixadas!
                                    </font></font></div>
                                    <div class="label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    Vermelho
                                    </font></font></div>
                                </div>
                                
                                <div class="ui yellow inverted statistic">
                                    <div class="value"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                   5000
                                    </font></font></div>
                                    <div class="label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    Amarelo
                                    </font></font></div>
                                </div>                                                             
                            
                     </div>
             </Grid>                
          </>
       )
    }
}

export default estatisticas;






