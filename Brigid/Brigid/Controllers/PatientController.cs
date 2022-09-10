using Application.Command.Commands;
using Application.Common.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Brigid.Controllers
{
    [Route("/api/patients")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IMediator _mediator;
        public PatientController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        [Route("patient")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<PatientDto>> Create([FromBody] CreatePatientCommand command)
        {
            var result = await _mediator.Send(command);
            return Ok(result);
        }
    }
}
