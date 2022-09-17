using Application.Command.Commands;
using Application.Common.Models;
using Application.Query.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Brigid.Controllers
{
    [Route("/api/patients")]
    [ApiController]
    [Authorize]
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

        [HttpGet]
        [Route("patient")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<PatientDto>>> Get()
        {
            var result = await _mediator.Send(new GetAllPatientsQuery());
            return Ok(result);
        }
    }
}
